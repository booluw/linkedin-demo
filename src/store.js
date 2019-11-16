/*
READ ME:  Selected: an array of objects for User's selected tutorials
          tutors: Pulled from firebase
          tutorials: Pulled from firebase
          location: Pulled from firebase


*/


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected : [],
    tutorials: [
      {
        'date':[0],
        'time':'4:30pm',
        'title':'CPT 311',
        'tutor':'Jayson X',
        'location':'SAAT LT',
        'attenders': ['Bolu', 'Azzez', 'Akanji', 'Danish','Jika','Jeff'],
        'rating': [3.5,2.3,3,4.5],
        'description': "We would be going indept to evey cranny of this course. Yu should expect nothin less than the best.",
        'campus': 'GK',
        'level': '300'
      },
      {
        'date':[0,1],
        'time':'12:10pm',
        'title':'CPT 516',
        'tutor':'Jayson X',
        'location':'SICT LT',
        'attenders': ['Kanji','Sirju','Catidern','Ojoanche'],
        'rating': [3.5,1.3,3,4],
        'description': "This course should be the easiest, join us to change the narrative.",
        "campus": 'GK',
        'level': '500'
      },
      {
        'date':[2,5],
        'time':'6:30pm',
        'title':'CPE 211',
        'tutor':'Paulinus',
        'location':'Engr. Complex RM 102',
        'attenders': ['Ganish','Haik','Olukay','Chichris','Beh','Hukka','Jika'],
        'rating': [3.5,3,3,5],
        'description': "We would go from the least level to an heroic one. <b>This week:</b> We would talk about Fluid Mechanics",
        'campus': 'GK',
        'level': '200'
      },
      {
        'date':[1],
        'time':'6pm',
        'title':'CPT 311',
        'tutor':'ChiChris',
        'location':'Auditorium',
        'attenders': ['Hei','Chunku ka','Kai','Loia','Hei','Chunku ka','Kai','Loia','Hei','Chunku ka','Kai','Loia'],
        'rating': [3.5,2,3,5],
        'description': "Java; what we'll be learning for FUN",
        'campus': 'GK',
        'level': '300'
      },
      {
        'date':[5,6],
        'time':'4:00pm',
        'title':'CIT 315',
        'tutor':'Ojoanache',
        'location':'NLR 3',
        'attenders': ['Siam','Lorem','Deind','Dasj','Hei','Chunku ka','Kai','Loia'],
        'rating': [5,3,3,5],
        'description': "For the Bosso buddies, catchup with all your Internet Security classes. PS: This is the best tutorial on Tutera.",
        'campus': 'Bosso',
        'level': '300'
      },
      {
        'date':[2,6],
        'time': '3:30pm',
        'title':'MAT 225',
        'tutor':'PhillyT',
        'location':'D Block RM 2',
        'attenders': ['Desmond'],
        'rating': [5],
        'description': "We would be solving dangerous maths equation.",
        'campus': 'Bosso',
        'level': '200'
      }
    ],
    locations: [
      {
        'image': '',
        'hall': 'NLH 2',
        'campus': 'Bosso'
      },
      {
       ' image': '',
        'hall': 'DH',
        'campus': 'Bosso'
      },
      {
        'image': '',
        'hall': 'NLR 2',
        'campus': 'Gidan Kwano'
      },
      {
        'image': '',
        'hall': 'SICT LT',
        'campus': 'Gidan Kwano'
      },
      {
        'image': '',
        'hall': 'LR 2',
        'campus': 'Gidan Kwano'
      },
      {
        'image': '',
        'hall': 'D Block RM 3',
        'campus': 'Bosso'
      },
      {
        'image': '',
        'hall': 'CPES Hall',
        'campus': 'Bosso'
      },
      {
        'image': '',
        'hall': 'BS',
        'campus': 'Bosso'
      },
      {
        'image': '',
        'hall': 'Auditorium',
        'campus': 'Gidan Kwano'
      },
    ],
    tutors: [
      {
        'name': 'Jayson X',
        'dept': 'CPT',
        'level': 400,
        'phone': 9086555753,
        'img': 'null',
        'faculty': 'SICT',
        'join_date': 'Dec. 2019',
        'url': 'https://twitter.com/booluw',
      },
      {
        'name': 'Paulinus',
        'dept': 'CPE',
        'level': 200,
        'phone': 801111123,
        'img': 'null',
        'faculty': 'SIPET',
        'join_date': 'Jan. 2020',
        'url': '//',
      },
      {
        'name': 'ChiChris',
        'dept': 'CPT',
        'level': 400,
        'phone': 903304004,
        'img': 'null',
        'faculty': 'SICT',
        'join_date': 'Jan. 2020',
        'url': '//:hello.world',
      },
      {
        'name': 'Ojoanache',
        'dept': 'CPT',
        'level': 400,
        'phone': 3929393,
        'img': 'null',
        'faculty': 'SICT',
        'join_date': 'Sept. 2020',
        'url': '//:cumbersome.me',
      },
      {
        'name': 'PhillyT',
        'dept': 'MCB',
        'level': 300,
        'phone': 2938443,
        'img': 'null',
        'faculty': 'SPS',
        'join_date': 'Feb. 2020',
        'url': '://mcb.hash',
      }
    ]
  },
  mutations: {
    ADD_TUTORIAL: (state, newContent) => {
      state.selected.push(newContent);
    },
    REMOVE_TUTORIAL: (state, toBeDeleted) => {
      state.selected = state.selected.filter(
        function(item) {
          return item !== toBeDeleted;
        });
    },
  },
  actions: {
    removeTutorial: (context, toBeDeleted) => {
        context.commit('REMOVE_TUTORIAL', toBeDeleted);
    }
  },
  getters: {
    selectedTotal: state => {
      return state.selected.length;
    }
  }
})
