import React from "react";
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

export const SiteMap: React.FC = () => {
    return (
        <YMaps>
            <div>
                <Map defaultState={{center: [55.751574, 37.573856], zoom: 9}} width={`${100}%`}>
                    <Placemark geometry={[55.684758, 37.738521]}/>
                </Map>

            </div>
        </YMaps>
    )
}