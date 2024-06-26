export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png";
export const USERPHOTO_URL = "https://occ-0-2042-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const API_OPTIONS ={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY ,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [
  {
    identifier: "eng", name : "English",
  }, 
  {
    identifier: "hindi", name: "Hindi"
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
