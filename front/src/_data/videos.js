module.exports = async function () {
  const ASSETS_URL = process.env.ASSETS_URL;
  const videos = [
    {
      id: "001",
      title: "トーストを焼く動画",
      path: `${ASSETS_URL}/video/sample01.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample01.jpg`,
      description: "トーストを焼く動画",
      category: "cooking",
    },
    {
      id: "002",
      title: "阪急電車",
      path: `${ASSETS_URL}/video/sample02.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample02.jpg`,
      description: "阪急電車",
      category: "train",
    },
    {
      id: "003",
      title: "蕎麦を茹でる動画",
      path: `${ASSETS_URL}/video/sample03.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample03.jpg`,
      description: "蕎麦を茹でる動画",
      category: "cooking",
    },
    {
      id: "004",
      title: "コーヒーを淹れる動画",
      path: `${ASSETS_URL}/video/sample04.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample04.jpg`,
      description: "コーヒーを淹れる動画",
      category: "cooking",
    },
    {
      id: "005",
      title: "公衆電話",
      path: `${ASSETS_URL}/video/sample05.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample05.jpg`,
      description: "公衆電話",
      category: "phone",
    },
    {
      id: "006",
      title: "ご飯を炊く動画",
      path: `${ASSETS_URL}/video/sample06.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample06.jpg`,
      description: "ご飯を炊く動画",
      category: "cooking",
    },
    {
      id: "007",
      title: "卵焼きを焼く動画",
      path: `${ASSETS_URL}/video/sample07.mp4`,
      thumbnail: `${ASSETS_URL}/video/thumbnail/sample07.jpg`,
      description: "卵焼きを焼く動画",
      category: "cooking",
    },
  ];
  return videos;
};
