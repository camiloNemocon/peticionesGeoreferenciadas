import React, { useRef } from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet"
import { EditControl } from 'react-leaflet-draw'
import osm from "./osm-provider"
import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
       "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
})



const Mapa = ( {datosMapa} ) => {

    const [center,setCenter] = useState({lat:4.6573524 , lng:-74.1109368 })
    const ZOOM_LEVEL = 15;
    const mapRef = useRef()

    const [mapLayers, setMapLayers] = useState([])
    

    const _created = (e) => {
        console.log(e)

        const { layerType, layer } = e;
         

        if( layerType === "polygon" ) {
                const {_leaflet_id} = layer;
                const {_latlngs} = layer;
                //console.log(_latlngs)
                setMapLayers( layers => [ ...layers, {id: _leaflet_id, latlngs: layer.getLatLngs()[0]  } ] ) 
    
            }

        if( layerType === "polyline" ) {
            const {_leaflet_id} = layer;
            const {_latlngs} = layer;
            console.log(_latlngs)
            setMapLayers( layers => [ ...layers, {id: _leaflet_id, latlngs: layer.getLatLngs()[0]  } ] ) 
              
        }

        if( layerType === "marker" ) {
            const {_leaflet_id} = layer;
            const {_latlng} = layer;
            console.log(_latlng)
            setMapLayers( layers => [ ...layers, {id: _leaflet_id, latlngs: _latlng  } ] )                
        }

    }

    const _edited = (e) => {
        //console.log(e)

        const { layers: {_layers}} = e

        Object.values(_layers).map(({_leaflet_id, editing}) => {
            setMapLayers((layers) =>
                            layers.map((l) => 
                                        l.id === _leaflet_id ? {...l, latlngs: {...editing.latlngs[0]}}: l 
                                      )
                        )
        })
    }

    const _deleted = (e) => {
        console.log(e)

        const { layers: {_layers}} = e

        Object.values(_layers).map(({_leaflet_id, _latlngs}) => {
            //console.log(_leaflet_id)
            //console.log(_latlngs[0])

            setMapLayers((layers) =>
                            layers.filter((l) => 
                                            l.id !== _leaflet_id  
                                         )
                        )
        })

    }
    

    return (
    <div className="row">
        <div className="col text-center">
            <div className="col">
                <MapContainer
                    center={center}
                    zoom={ZOOM_LEVEL}     
                    ref={mapRef}          
                    maxZoom={18}
                    minZoom={10}         
                >
                    <FeatureGroup>
                        <EditControl 
                            position="topright" 
                            onCreated={_created}                            
                            onEdited={_edited}
                            onDeleted={_deleted}
                            draw={{
                                rectangle:false,
                                circle:false,
                                circlemarker:false,
                                marker:true,
                                polyline:true,
                                polygon:true,             
                            }}                          
                        />
                            
                    </FeatureGroup>

                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
                </MapContainer>

                {datosMapa( mapLayers )}  

            </div>    
        </div>        
    </div>
  )
}

export default Mapa