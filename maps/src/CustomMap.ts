/// <reference types="@types/google.maps" />

export interface Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  content?: string
}

export class CustomMap {
  private googleMap: google.maps.Map
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({ content: mappable.name })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
