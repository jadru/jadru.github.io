module.exports = {
  title: `younggun's blog`,
  description: `개발자의 노트`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jadru.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `jadru/jadru.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-215028938-1', // Google Analytics Tracking ID
  author: {
    name: `영건`,
    bio: {
      role: `대학생`,
      description: ['프로그래머', '엔지니어'],
      thumbnail: 'profile.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/jadru`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/younggunii`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `ygpark0922@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
