import Ember from 'ember';

export default Ember.Component.extend({
  writingNewAnnouncement: false,
  actions: {
    showAnnouncementForm() {
      this.set('writingNewAnnouncement', true);
    },
    makeNewAnnouncement() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        mainText: this.get('mainText')
      };
      this.set('writingNewAnnouncement', false);
      this.sendAction('makeNewAnnouncement', params);
    }

  }
});
