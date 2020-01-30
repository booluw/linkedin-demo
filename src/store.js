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
        'date':['Sundays'],
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
        'date':['Sundays', 'Mondays', 'Saturdays'],
        'time':'12:30pm',
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
        'date':['Tuesdays', 'Fridays'],
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
        'date':['Thursdays'],
        'time':'6:30pm',
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
        'date':['Saturdays', 'Fridays'],
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
        'date':['Sundays', 'Wednesdays'],
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
        'campus': 'Gidan Kwano',
        capacity: 129
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
        'quote': 'I am who I think I am, so are you',
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
        'quote': 'Don\'t think you\'re the best, someone somewhere is better.',
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
        'quote': 'Influence. Influence. Influence yet again.',
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
        'quote': 'I want to be a programmer, brogrammer.',
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
        'quote': 'Hey! HelloWorld',
        'dept': 'MCB',
        'level': 300,
        'phone': 2938443,
        'img': 'null',
        'faculty': 'SPS',
        'join_date': 'Feb. 2020',
        'url': '://mcb.hash',
      }
    ],
    time: [1,2,3,4,5,6],
    levels: [100,200,300,400,500],
    quiz: [
      {
        title: 'CPT 311',
        author: 'Boluwatife Johnson',
        topic: 'General Affairs',
        note: 'This is a preparatory quiz.',
        questions: [
          {
            question: 'What is the name of the FIRST BILLIONAIRE in the world?',
            answers: {
              'A': 'Jeff Belzos',
              'B': 'Bill Gates',
              'C': 'Aliko Dangote',
              'D': 'John D. Rockfeller'
            },
            answer: 'John D. Rockfeller',
            userAnswer: ''
          },
          {
            question: 'Who is the CURRENT VICE-PRESIDENT of Nigeria?',
            answers: {
              'A': 'Muhammadu Buhari',
              'B': 'Goodluck Ebele Jonathan',
              'C': 'Donald Trump',
              'D': 'Yemi Osibanjo'
            },
            answer: 'Yemi Osibanjo',
            userAnswer: ''
          },
          {
            question: 'Is Nigeria a country?',
            answers: {
              'A': 'True',
              'B': 'False',
              'C': 'Maybe',
              'D': 'Dunno'
            },
            answer: 'True',
            userAnswer: ''
          }
        ]
      }
    ],
    users: [
      {
        'name': 'Jayson',
        'email': 'jaycewap@gmail.com',
        'type': 'Admin',
        'password': 'jabla'
      },
      {
        'name': 'Chinedu',
        'email': 'Chinedu@gmail.com',
        'type': 'Tuteran',
        'password': 'tambila'
      },
      {
        'name': 'Excel',
        'type': 'Volunteer',
        'email': 'Excel@tutera.ng',
        'password': '1222'
      },
      {
        'name': 'Bonboi',
        'type': 'Tuterite',
        'email': 'jablow@tutera.ng',
        'password': '1234'
      }
    ],
    authenticated: false,
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
    REMOVE_ALL: (state) => {
      state.selected = [];
    },
    setAuthentication(state, status) {
      state.authenticated = status;
    }
  },
  actions: {
    removeTutorial: (context, toBeDeleted) => {
        context.commit('REMOVE_TUTORIAL', toBeDeleted);
    },
    remove_all: (context) => {
      context.commit('REMOVE_ALL');
    }
  },
  getters: {
    selectedTotal: state => {
      return state.selected.length;
    }/*,
    tutorDetails: (state, tutorName) => {
      return (state.tutors.name == tutorName);
    }*/
  }
})
