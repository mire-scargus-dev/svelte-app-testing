import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/svelte';
import BasicMap from '$lib/shared/BasicMap/BasicMap.svelte';
import { vi, expect } from 'vitest';
import '@testing-library/jest-dom';

let component: HTMLElement;

beforeEach(() => {
	// Renderiza el componente y guarda el contenedor
	const result = render(BasicMap);
	component = result.container;
});

//Mock de OpenLayers para imitar el renderizado de un mapa
describe('BasicMap Component', () => {
	vi.mock('ol', () => ({
		Map: vi.fn(() => ({
			setTarget: vi.fn() // Usar vi.fn() en lugar de jest.fn()
		})),
		View: vi.fn()
		// Mock de otras clases o funciones de OpenLayers según sea necesario
	}));

	it('matches rendered snapshot', async () => {
		expect(component).toMatchSnapshot();
	});

	it('should renders the BasicMap in the DOM', async () => {
		// Renderizar el componente
		expect(component).toBeInTheDocument();
	});

	it('should have a div element with map-basic as data-testid', () => {
		// Verificamos que el div existe según su data-testid
		const { getAllByTestId } = render(BasicMap);
		const map = getAllByTestId('map-basic');
		expect(map[0]).toBeInTheDocument();
	});
	it('should have a button element', () => {
		//Se comprueba que al menos exista 1 elemento de tipo botón
		const { getAllByRole } = render(BasicMap);
		const button = getAllByRole('button');
		expect(button[0]).toBeInTheDocument();
	});
});
