const animeList = [
  {
    title: "堀與宮村",
    genre: "戀愛",
    mood: "輕鬆",
    length: "短篇",
    reason: "適合喜歡校園戀愛、輕鬆劇情與短篇作品的觀眾。劇情節奏舒服，不會太沉重。"
  },
  {
    title: "輝夜姬想讓人告白",
    genre: "戀愛",
    mood: "輕鬆",
    length: "中篇",
    reason: "戀愛與搞笑元素明顯，角色互動有趣，適合想看輕鬆戀愛喜劇的人。"
  },
  {
    title: "鬼滅之刃",
    genre: "戰鬥",
    mood: "熱血",
    length: "中篇",
    reason: "戰鬥場面明確，主角成長線清楚，適合喜歡熱血、友情與冒險的觀眾。"
  },
  {
    title: "咒術迴戰",
    genre: "戰鬥",
    mood: "熱血",
    length: "中篇",
    reason: "節奏快，戰鬥設計強，適合喜歡能力戰鬥與刺激劇情的觀眾。"
  },
  {
    title: "葬送的芙莉蓮",
    genre: "奇幻",
    mood: "感動",
    length: "中篇",
    reason: "奇幻世界觀結合角色回憶與人生思考，適合喜歡感動、細膩劇情的人。"
  },
  {
    title: "死亡筆記本",
    genre: "懸疑",
    mood: "燒腦",
    length: "中篇",
    reason: "劇情充滿心理博弈與反轉，適合想看懸疑、推理與鬥智劇情的觀眾。"
  },
  {
    title: "搖曳露營",
    genre: "日常",
    mood: "輕鬆",
    length: "短篇",
    reason: "節奏放鬆，氣氛治癒，適合想看低壓力日常動漫的人。"
  },
  {
    title: "孤獨搖滾",
    genre: "日常",
    mood: "輕鬆",
    length: "短篇",
    reason: "以音樂與角色成長為主，兼具搞笑與青春感，適合想看輕鬆作品的人。"
  },
  {
    title: "排球少年",
    genre: "運動",
    mood: "熱血",
    length: "長篇",
    reason: "角色成長完整，比賽節奏熱血，適合喜歡團隊合作與運動題材的人。"
  },
  {
    title: "藍色監獄",
    genre: "運動",
    mood: "熱血",
    length: "中篇",
    reason: "節奏快，競爭感強，適合喜歡運動、競技與刺激劇情的觀眾。"
  }
];

function recommendAnime() {
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const length = document.getElementById("length").value;
  const resultDiv = document.getElementById("result");

  let results = animeList.filter(anime => {
    return anime.genre === genre || anime.mood === mood || anime.length === length;
  });

  results = results.map(anime => {
    let score = 0;

    if (anime.genre === genre) score += 40;
    if (anime.mood === mood) score += 35;
    if (anime.length === length) score += 25;

    return {
      ...anime,
      score: score
    };
  });

  results.sort((a, b) => b.score - a.score);

  const topResults = results.slice(0, 3);

  if (topResults.length === 0) {
    resultDiv.innerHTML = "<p>目前找不到符合條件的動漫。</p>";
    return;
  }

  let html = "<h2>推薦結果</h2>";

  topResults.forEach((anime, index) => {
    html += `
      <div class="card">
        <h3>${index + 1}. ${anime.title}</h3>
        <p><strong>類型：</strong>${anime.genre}</p>
        <p><strong>觀看感受：</strong>${anime.mood}</p>
        <p><strong>集數偏好：</strong>${anime.length}</p>
        <p><strong>推薦分數：</strong>${anime.score}</p>
        <p><strong>推薦理由：</strong>${anime.reason}</p>
      </div>
    `;
  });

  resultDiv.innerHTML = html;
}