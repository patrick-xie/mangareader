var poketo = require('poketo')

poketo.getSeries('https://mangadex.org/title/153/detective-conan').then(series => {
  let chapters = series.chapters
  chapters = chapters.reverse();

  for(var i = 0; i < 1; ++i){
    poketo.getChapter(chapters[i].url).then(chapter => {
      let pages = chapter.pages
      console.log("{")
      for(var j = 0; j < pages.length; ++j){
        console.log('"page' + j + '":')
        console.log(pages[j]);
        console.log(",")
      }
      console.log("}")
    });
  }
});
