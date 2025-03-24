<script>
	import { onMount } from 'svelte';
	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile';
	import OSM from 'ol/source/OSM';
	import { TileWMS } from 'ol/source';


	//formar mapa básico con solo una capa
	let map;

	onMount(() => {
		// mapa base con OpenStreetMap
		const baseLayer = new TileLayer({
			source: new OSM()
		});

		// Capa WMS desde GeoServer
		const wmsLayer = new TileLayer({
			source: new TileWMS({
				url: 'http://146.83.128.10:8080/geoserver/wms', // URL del GeoServer
				params: {
					SERVICE: 'WMS',
					REQUEST: 'GetMap',
					FORMAT: 'image/png',
					TRANSPARENT: true,
					VERSION: '1.1.1',
					LAYERS: 'presiones:Anomalías de temperatura del mar año 2022', // Nombre de la capa en GeoServer
					STYLES: '',
					SRS: 'EPSG:4326'
				},
				serverType: 'geoserver'
			})
		});

		// Crear el mapa
		map = new Map({
			target: 'map-basic',
			layers: [baseLayer, wmsLayer],
			view: new View({
				center: [-70.65, -33.44], // Santiago, Chile
				zoom: 6,
				projection: 'EPSG:4326'
			})
		});
	});
</script>

<!-- Contenedor del mapa -->
<div id="map-basic" class="group inline-flex"></div>

<style>
	#map-basic {
		display: flex;
		width: 50%;
		height: 50vh;
	}
</style>
