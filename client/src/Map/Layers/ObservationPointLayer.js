import {IconLayer, TextLayer } from 'deck.gl';

const ICON_MAPPING = { 
  marker: {
    x: 0,
    y: 0,
    width: 128,
    height: 128,
    anchorY: 155,
    mask: true
  }
};

const ObservationPointLayer = (toggleDisplayGraph, data, handleHover) => (
  new IconLayer({
    id: "icon-layer",
    data,
    pickable: true,
    iconAtlas: "/location-icon-atlas.png",
    iconMapping: ICON_MAPPING,
    sizeScale: 15,
    getPosition: d => [d.Location[1], d.Location[0]],
    getIcon: d => "marker",
    getSize: d => 5,
    getColor: [153, 204, 255],//[27, 39, 170],
    onClick: toggleDisplayGraph,
    onHover: handleHover,
    clickRadius: 30
  })
);

const NameLayer = (toggleDisplayGraph, data)=> (
  new TextLayer({
    id: 'text-layer',
    pickable: true,
    fontFamily: "'Nunito', sans-serif",
    data,
    //fontFamily: 'Century Gothic, sans-serif',
    getPosition: d => [d.Location[1], d.Location[0]],
    getText: d => d.siteDisplayName,
    getSize: 32,
    getTextAnchor: 'middle',
    getAlignmentBaseline: 'center',
    getColor: [0, 38, 77],
    onClick: toggleDisplayGraph
   })
);

export const ObservationPointLayers = (pointLocationsSites, toggleDisplayGraph, handleHover)=> 
(
  [
    ObservationPointLayer(toggleDisplayGraph, pointLocationsSites, handleHover), 
    NameLayer(toggleDisplayGraph, pointLocationsSites)
  ]
);