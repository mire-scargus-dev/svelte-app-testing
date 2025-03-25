import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// pAra evitar errores al correr tests que prueben contenido dinámico
if (typeof global.ResizeObserver === 'undefined') {
	global.ResizeObserver = class {
		observe() {}
		unobserve() {}
		disconnect() {}
	};
}

// required for svelte5 + jsdom as jsdom does not support matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	enumerable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
});

// add more mocks here if you need them
