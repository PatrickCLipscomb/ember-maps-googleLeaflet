import Ember from 'ember';

export default Ember.Component.extend({
  lat: 45.519743,
  lng: -122.680522,
  zoom: 10,
  restaurants: Ember.A([
    {
      name: 'Sinju Restaurant',
      rating: 4,
      lat: 45.528531,
      lng: -122.681682
    },
    {
      name: 'Burgerville',
      rating: 3.8,
      lat: 45.530970,
      lng: -122.661968
    },
    {
      name: 'Le Pigeon',
      rating: 4.5,
      lat: 45.522752,
      lng: -122.657979
    },
  ]),
  dangerZone: Ember.computed('restaurants.@each.lat', 'restaurants.@each.lng', function() {
    return this.get('restaurants').map(r => ({lat: r.lat, lng: r.lng}));
  }),
  actions: {
    updateLocation(r, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(r, {
        lat: location.lat,
        lng: location.lng
      });
    }
  }
});
