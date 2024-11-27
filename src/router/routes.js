import UseHome from '@/component/UseHome.vue';
import UseAbout from '@/Pages/About/UseAbout.vue';
import UseBlog from '@/Pages/Blog/UseBlog.vue';
import UseContact from '@/Pages/ContactUs/UseContact.vue';
import UseProfile from '@/Pages/Profile/UseProfile.vue';
import UseSettings from '@/Pages/Settings/UseSettings.vue';

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/Blog',
    component: UseBlog
  },
  {
    path: '/About',
    component: UseAbout
  },
  {
    path: '/Contact',
    component: UseContact
  },
  {
    path: '/Settings',
    component: UseSettings
  },
  {
    path: '/Profile',
    component: UseProfile
  }
];
