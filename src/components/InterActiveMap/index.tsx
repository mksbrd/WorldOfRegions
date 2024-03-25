import 'mapbox-gl/dist/mapbox-gl.css'
import '../InterActiveMap/map.css'
import {FillLayer, Layer, LineLayer, Map, Popup, Source} from 'react-map-gl'
import {isEmpty} from "lodash-es";
import {useCallback, useRef, useState} from "react";
import Image from "../../lib/UI/Image";
import Text from "../../lib/UI/Text";
import FlexBox from "../../lib/UI/FlexBox";


interface initialValue {
    latitude: number,
    longitude: number,
    zoom: number
}


type InterActiveMapProps = {
    mapStyle: string,
    initialState: initialValue
    geoJson?: any
    onAreaClick?: (placeName: string) => void
}


const InterActiveMap = (
    {
        mapStyle,
        initialState,
        onAreaClick,
        geoJson = {},
    }: InterActiveMapProps
) => {

    const mapRef = useRef<any>()

    const [hover, setHover] = useState<any | undefined>(undefined)

    const fillLayer: FillLayer = {
        id: 'data',
        type: 'fill',
        paint: {
            'fill-color': 'rgba(0, 0, 0, 0)',
        },
    };
    const lineLayer: LineLayer = {
        id: '',
        type: 'line',
        paint: {
            "line-color": 'white'
        }
    }

    const onHover = useCallback((event: any) => {
        const {
            features,
            lngLat
        } = event;
        const hoveredFeature = features && features[0];
        if (hoveredFeature) {
            if (hover !== hoveredFeature?.properties?.name) {
                setHover({
                    name: hoveredFeature?.properties?.name,
                    image: hoveredFeature?.properties?.image,
                    lng: lngLat.lng,
                    lat: lngLat.lat
                })
            }
        } else {
            if (hoveredFeature !== hover) {
                setHover(undefined)
            }
        }

    }, [hover]);
    const onClick = useCallback((event: any) => {
        const {
            features,
        } = event;
        const hoveredFeature = features && features[0];
        if (hoveredFeature) {
            if (onAreaClick) {
                onAreaClick(hoveredFeature?.properties?.name)
            }
        }
    }, [])

    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Map
                    ref={mapRef}
                    mapboxAccessToken={'pk.eyJ1IjoibWtzYnJkIiwiYSI6ImNsdHZnMzhhazBzeDIycG91N3g1Y2RqdnQifQ.YBYxD58QLjQqSe1QU_i16w'}
                    mapStyle={mapStyle}
                    projection={'globe' as any}
                    styleDiffing={false}
                    dragRotate={false}
                    minZoom={3}
                    interactiveLayerIds={['data']}
                    initialViewState={initialState}
                    onMouseMove={onHover}
                    onClick={onClick}
                >
                    {!isEmpty(geoJson) && (
                        <>
                            <Source type="geojson" data={geoJson}>
                                <Layer
                                    {...fillLayer}
                                />
                                {hover && (
                                    <Popup
                                        anchor={'bottom'}
                                        closeButton={false}
                                        longitude={hover.lng}
                                        latitude={hover.lat}
                                    >
                                        <FlexBox
                                            onMouseEnter={() => {
                                                setHover(undefined)
                                            }}
                                            style={{
                                                flexDirection: 'column',
                                                position: 'relative'
                                            }}
                                        >
                                            <Image
                                                src={hover.image}
                                                style={{
                                                    width: '100%',
                                                    minWidth: '200px',
                                                    height: '120px',
                                                    borderRadius: '5px'
                                                }}
                                            />
                                            <Text
                                                style={{
                                                    bottom: '5px',
                                                    left: '5px',
                                                    position: 'absolute',
                                                    fontWeight: 'bold',
                                                    fontSize: '21px'
                                                }}
                                            >
                                                {hover?.name}
                                            </Text>
                                        </FlexBox>
                                    </Popup>
                                )}
                            </Source>
                            <Source type="geojson" data={geoJson}>
                                <Layer
                                    {...lineLayer}
                                />
                            </Source>
                        </>
                    )}
                </Map>
            </div>
        </>
    )
}

export default InterActiveMap