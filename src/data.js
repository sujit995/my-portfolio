export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'Twitter clone',
          description: 'It is a simple social media application that allows users to post interesting events, Only the authenticated user can create, update and delete the post',
          animationDelay: '300',
          buttonLink: 'https://twitter-clone-v2-five.vercel.app',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Unichat',
          description: 'This is one to one chat app where a user can chat with another user. The user needs to sign in first and search for the name of the user, he/she wants to talk to.',
          animationDelay: '500',
          buttonLink: 'https://sujitm-unichat.netlify.app',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Project Name Here',
          description: 'This is a real-time editor where the user can write the code using HTML, CSS, and JS and can see the output below.',
          animationDelay: '700',
          buttonLink: 'https://sujit-codepen-editor.netlify.app',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Project Name Here',
          description:
            'Project description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto mollitia at, neque iste, cupiditate distinctio ipsam animi iure nam inventore eos illo officiis voluptatibus labore est nulla totam magni minima blanditiis,',
          animationDelay: '900',
          buttonLink: 'https://codemmit.tech',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Under Construction',
          description: '</>',
          animationDelay: '1100',
          buttonText: '',
        },
      ],
    },
    internships: {
      internship: [
        {
          companyName: 'IWEBCODE',
          role: 'Front-end Developer',
          introText: '',
          duration: '7/02/2023 - 5/08/2022',
          keyPointOne: ' Created and Implemented new features on company website using React and Strapi',
          keyPointTwo:
            'Worked with a team of developers to create an interactive and user-friendly website experience.',
          keyPointThree: 'Edited Existing codes to browser compatibility and and code reviews.',
          keyPointFour:
            'Participated on Weekly Tech team meetings to discuss current project and strategies on how to produce efficient work.',
          offsetValue: '0',
        },
      ],
    },
  },
};

export default config;
