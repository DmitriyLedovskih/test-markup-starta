const ENABLED_BEHAVIORS = [
  "drag",
  "scrollZoom",
  "dblClick",
  "mouseTilt",
  "mouseRotate",
];

const initMap = async () => {
  ymaps3.strictMode = true;
  ymaps3.ready.then(() => {
    ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", [
      "@yandex/ymaps3-default-ui-theme@0.0",
    ]);
  });
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapControls,
  } = ymaps3;

  const { YMapZoomControl, YMapRotateTiltControl, YMapGeolocationControl } =
    await ymaps3.import("@yandex/ymaps3-default-ui-theme");

  const map = new YMap(
    document.getElementById("map"),
    {
      location: {
        center: [92.910262, 55.991752],
        zoom: 16,
      },
      behaviors: ENABLED_BEHAVIORS,
    },
    [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
  );

  map.addChild(
    new YMapControls({ position: "right" }, [
      new YMapZoomControl({}),
      new YMapGeolocationControl({
        easing: "ease-in-out",
        duration: 2000,
        zoom: 15,
      }),
      new YMapRotateTiltControl({}),
    ])
  );
};

export default initMap;
