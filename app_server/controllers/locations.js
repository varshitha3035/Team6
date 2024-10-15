const homelist = (req, res) => {
    res.render('locations-list', {
      title:'Blogpage- Changes the lifestyle',
      pageHeader: {
        title: 'Blogpages',
        strapline: 'Blogpages'
      },
      sidebar: 'Imagine waking up without the stress of a daily commute,having the flexibility to create a work environment that suits you best,and finding a better balance between your personal and professional life..' ,
         locations:[{
           name: 'Travel',
           rating: 4,
           facilities: ['goa','maldives'],
           
         },{
           name: 'Food',
           rating: 3,
           facilities: ['indian', 'italian'],
         },{
           name: 'Fashion',
           rating: 2,
           facilities: [ 'Dress', 'Style'],
           
         }]
       });
      };
         /* GET 'Location info' page */
    const locationInfo = (req, res) => {
       res.render('location-info', { title: 'Location info' });
      };
      const Travel = (req, res) => {
        res.render('location-info1', { title: 'Location info' });
       };
       const Food = (req, res) => {
        res.render('locationinfo2', { title: 'Location info' });
       };
       const Fashion = (req, res) => {
        res.render('locationinfo3', { title: 'Location info' });
       };
       /* GET 'Add review' page */
      const addReview = (req, res) => {
       res.render('location-review-form', { title: 'Add review' });
      };
      module.exports = {
        Food,
        Travel,
        Fashion,
       homelist,
       locationInfo,
       addReview
      };
 