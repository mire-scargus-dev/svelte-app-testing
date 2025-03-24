<script lang="ts">
	import { onMount } from 'svelte';
	import Map from 'ol/Map';
	import View from 'ol/View';
	import TileLayer from 'ol/layer/Tile';
	import OSM from 'ol/source/OSM';
	import { Vector as VectorLayer } from 'ol/layer';
	import { Tile, TileWMS, Vector as VectorSource } from 'ol/source';
	import { GeoJSON } from 'ol/format';
	import { Style, Fill, Stroke } from 'ol/style';
	import TileSource from 'ol/source/Tile';

	let map;

	const SLD = `<?xml version="1.0" encoding="UTF-8"?>
            <StyledLayerDescriptor version="1.0.0" 
            xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
            xmlns="http://www.opengis.net/sld" 
            xmlns:ogc="http://www.opengis.net/ogc" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <NamedLayer>
                <Name>comunas_v11</Name>
                <UserStyle>
                <Title>Default Polygon</Title>
                <Abstract>A sample style that draws a polygon</Abstract>
                <FeatureTypeStyle>
                    <Rule>
                    <Name>rule1</Name>
                    <Title>Gray Polygon with Black Outline</Title>
                    <Abstract>A polygon with a gray fill and a 1 pixel black outline</Abstract>
                    <PolygonSymbolizer>
                        <Fill>
                        <CssParameter name="fill">#000000</CssParameter>
                        </Fill>
                        <Stroke>
                        <CssParameter name="stroke">#00ff00</CssParameter>
                        <CssParameter name="stroke-width">2</CssParameter>
                        </Stroke>
                    </PolygonSymbolizer>
                    </Rule>
                </FeatureTypeStyle>
                </UserStyle>
            </NamedLayer>
            </StyledLayerDescriptor>`;

	onMount(() => {
		// Mapa base OSM
		const baseLayer = new TileLayer({
			source: new OSM()
		});

		const wmsLayer = new TileLayer({
			source: new TileWMS({
				url: 'http://146.83.128.10:8080/geoserver/comunas/wms', // URL del GeoServer
				params: {
					SERVICE: 'WMS',
					REQUEST: 'GetMap',
					FORMAT: 'image/png',
					TRANSPARENT: true,
					VERSION: '1.1.1',
					LAYERS: 'comunas:comunas_v11', // Nombre de la capa en GeoServer
					STYLES: '',
					SRS: 'EPSG:4326',
					SLD_BODY: SLD
				},
				serverType: 'geoserver'
			})
		});

		// Crear el mapa
		map = new Map({
			target: 'map-styled',
			layers: [baseLayer, wmsLayer],
			view: new View({
				center: [-70.65, -33.44], // Santiago, Chile
				zoom: 6,
				projection: 'EPSG:4326'
			})
		});
	});
</script>

<!-- @component
    ```Svelte
        <StyledMap />
    ```
    map with customized styles through OpenLayers and Geoserver
 -->

<div id="map-styled" class="group inline-flex"></div>

<style>
	#map-styled {
		display: flex;
		width: 50%;
		height: 50vh;
	}
</style>
