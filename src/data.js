import ImageNetflix from './assets/images/netflix.PNG'
import ImageTwitter from './assets/images/twitter.png'
import ImageCodepen from './assets/images/codepen.PNG'

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
          buttonText: 'LIVE',
          buttonCode: "https://github.com/sujit995/netflix-clone2.0",
          button: 'CODE',
          imageUrl: ImageNetflix
        },
        // {
        //   heading: 'Unichat',
        //   description: 'This is one to one chat app where a user can chat with another user. The user needs to sign in first and search for the name of the user, he/she wants to talk to.',
        //   animationDelay: '500',
        //   buttonLink: 'https://sujitm-unichat.netlify.app',
        //   buttonText: 'CHECK OUT',
        //   imageUrl: ImageTwitter
        // },
        {
          heading: 'Codepen Editor',
          description: 'This is a real-time editor where the user can write the code using HTML, CSS, and JS and can see the output below.',
          animationDelay: '700',
          buttonLink: 'https://sujit-codepen-editor.netlify.app',
          buttonText: 'LIVE',
          buttonCode: "https://github.com/sujit995/codepenEditor-clone",
          button: 'CODE',
          imageUrl: ImageCodepen
        },
        {
          heading: 'Netflix-clone2.0',
          description:'User can login to watch their favroite show and added to the wishlist to watch later.',
          buttonLink: 'https://netflix-clone2-0-five.vercel.app/auth',
          buttonText: 'LIVE',
          buttonCode: "https://github.com/sujit995/netflix-clone2.0",
          button: 'CODE',
          imageUrl: ImageNetflix
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
          keyPointOne: 'Created and Implemented new features on company website using React and Strapi',
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
