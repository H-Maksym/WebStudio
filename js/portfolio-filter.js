// TODO filter button 

const arrayImg = [
  {
    title: "Технокряк",
    type: "Веб-сайт",
    filterType: "web-site",
    alt: "Веб-сайт Технокряк",

    srcImg: "./images/portfolio/appgrovingbusinnes-900@2x.jpg",

    smallImgDesc: "./images/portfolio/appgrovingbusinnes-370.jpg  1x",
    bigImgDesc: "./images/portfolio/appgrovingbusinnes-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/appgrovingbusinnes-354.jpg 1x",
    bigImgTab: "./images/portfolio/appgrovingbusinnes-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/appgrovingbusinnes-450.jpg 1x",
    bigImgMob: "./images/portfolio/appgrovingbusinnes-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице."
  },

  {
    title: "Постер New Orlean vs Golden Star",
    type: "Дизайн",
    filterType: "design",
    alt: "Постер New Orlean vs Golden Starк",

    srcImg: "./images/portfolio/designposterneworleangoldenstar-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/designposterneworleangoldenstar-370.jpg  1x",
    bigImgDesc: "./images/portfolio/designposterneworleangoldenstar-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/designposterneworleangoldenstar-354.jpg 1x",
    bigImgTab: "./images/portfolio/designposterneworleangoldenstar-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/designposterneworleangoldenstar-450.jpg 1x",
    bigImgMob: "./images/portfolio/designposterneworleangoldenstar-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице.",
  },

  {
    title: "Ресторан Seafood",
    type: "Дизайн",
    filterType: "design",
    alt: "Ресторан Seafood",

    srcImg: "./images/portfolio/applicationseafood-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/applicationseafood-370.jpg  1x",
    bigImgDesc: "./images/portfolio/applicationseafood-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/applicationseafood-354.jpg 1x",
    bigImgTab: "./images/portfolio/applicationseafood-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/applicationseafood-450.jpg 1x",
    bigImgMob: "./images/portfolio/applicationseafood-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице.",
  },


  {
    title: "Проект Prime",
    type: "Маркетинг",
    filterType: "marketing",
    alt: "Проект Prime",

    srcImg: "./images/portfolio/marketingprime-900@2x.jpg",

    smallImgDesc: "./images/portfolio/marketingprime-370.jpg  1x",
    bigImgDesc: "./images/portfolio/marketingprime-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/marketingprime-354.jpg 1x",
    bigImgTab: "./images/portfolio/marketingprime-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/marketingprime-450.jpg 1x",
    bigImgMob: "./images/portfolio/marketingprime-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице.",
  },


  {
    title: "Проект Boxes",
    type: "Приложение",
    filterType: "application",
    alt: "Проект Boxes",

    srcImg: "./images/portfolio/applicationboxes-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/applicationboxes-370.jpg  1x",
    bigImgDesc: "./images/portfolio/applicationboxes-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/applicationboxes-354.jpg 1x",
    bigImgTab: "./images/portfolio/applicationboxes-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/applicationboxes-450.jpg 1x",
    bigImgMob: "./images/portfolio/applicationboxes-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице.",
  },

  {
    title: "Inspiration has no Borders",
    type: "Веб-сайт",
    filterType: "web-site",
    alt: "Inspiration has no Borders",

    srcImg: "./images/portfolio/sitenoborders-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/sitenoborders-370.jpg  1x",
    bigImgDesc: "./images/portfolio/sitenoborders-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/sitenoborders-354.jpg 1x",
    bigImgTab: "./images/portfolio/sitenoborders-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/sitenoborders-450.jpg 1x",
    bigImgMob: "./images/portfolio/sitenoborders-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице."
  },

  {
    title: "Издание Limited Edition",
    type: "Дизайн",
    filterType: "design",
    alt: "Издание Limited Edition",

    srcImg: "./images/portfolio/designlimitededition-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/designlimitededition-370.jpg  1x",
    bigImgDesc: "./images/portfolio/designlimitededition-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/designlimitededition-354.jpg 1x",
    bigImgTab: "./images/portfolio/designlimitededition-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/designlimitededition-450.jpg 1x",
    bigImgMob: "./images/portfolio/designlimitededition-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице."
  },

  {
    title: "Проект LAB",
    type: "Маркетинг",
    filterType: "marketing",
    alt: "Проект LAB",

    srcImg: "./images/portfolio/marketinglab-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/marketinglab-370.jpg  1x",
    bigImgDesc: "./images/portfolio/marketinglab-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/marketinglab-354.jpg 1x",
    bigImgTab: "./images/portfolio/marketinglab-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/marketinglab-450.jpg 1x",
    bigImgMob: "./images/portfolio/marketinglab-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице."
  },

  {
    title: "Growing Business",
    type: "Приложение",
    filterType: "application",
    alt: "Growing Business",

    srcImg: "./images/portfolio/appgrovingbusinnes-900@2x.jpg ",

    smallImgDesc: "./images/portfolio/appgrovingbusinnes-370.jpg  1x",
    bigImgDesc: "./images/portfolio/appgrovingbusinnes-740@2x.jpg 2x",

    smallImgTab: "./images/portfolio/appgrovingbusinnes-354.jpg 1x",
    bigImgTab: "./images/portfolio/appgrovingbusinnes-708@2x.jpg 2x",


    smallImgMob: "./images/portfolio/appgrovingbusinnes-450.jpg 1x",
    bigImgMob: "./images/portfolio/appgrovingbusinnes-900@2x.jpg 2x",

    description: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов.Все это позволит посетителю получить исчерпывающие сведения компании или частном лице."
  },

]

const filterButtonEl = document.querySelector(".portfolio__filter");
const imgListEl = document.querySelector(".portfolio__list");


const arrayFilter = arrayImg.reduce((acc, item) => {
  if (!acc.some(el => el["filter"] === item.filterType)) {
    acc.push({ "filter": item.filterType, "text": item.type })
  }
  return acc
}, []);

arrayFilter.unshift({ filter: 'all', text: "Все" })


function addItemFilterMarkup({ filter, text }) {
  const itemMarkup = `<li class="portfolio-filter__item">
              <button type="button" class="btn-secondary" data-tag=${filter}>${text}</button>
            </li>`
  return itemMarkup;
}

function addItemImageMarkup(object) {
  const { title, type, filterType, alt, srcImg, smallImgDesc, bigImgDesc, smallImgTab, bigImgTab, smallImgMob, bigImgMob, description } = object;
  const itemMarkup = `<li class="portfolio__item card-set-item">
              <a href="" class="portfolio__link">
                <div class="portfolio__thumb">
                  <picture>
                    <source
                      srcset="
                        ${smallImgDesc},
                        ${bigImgDesc}
                      "
                      type="image/jpeg"
                      media="(min-width:1200px)"
                    />
                    <source
                      srcset="
                        ${smallImgTab},
                        ${bigImgTab}
                      "
                      type="image/jpeg"
                      media="(min-width:768px)"
                    />
                    <source
                      srcset="
                        ${smallImgMob},
                        ${bigImgMob}
                      "
                      type="image/jpeg"
                      media="(max-width:768px)"
                    />
                    <img
                      alt="${alt}"
                      src="${srcImg}"
                    />
                  </picture>

                  <div class="portfolio__overlay">
                    <p class="portfolio__note">
                      ${description}
                    </p>
                  </div>
                </div>
                <div class="portfolio__wrap">
                  <h2 class="portfolio__title">${title}</h2>
                  <p class="portfolio__type">${type}</p>
                </div>
              </a>
            </li>`
  return itemMarkup;
}


function filterMarkup(arrayBtn) {
  const btnFilterMarkup = arrayBtn
    .map(addItemFilterMarkup)
    .join('');

  filterButtonEl.insertAdjacentHTML('beforeend', btnFilterMarkup);
}

filterMarkup(arrayFilter);


function imgListMarkup(data) {
  const imageListMarkup = data
    .map(addItemImageMarkup)
    .join('');
  imgListEl.insertAdjacentHTML('beforeend', imageListMarkup);
}

imgListMarkup(arrayImg);



function onBtnClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  imgListEl.innerHTML = "";

  const activeFilter = document.querySelector(".is-active")

  if (activeFilter) {
    activeFilter.classList.remove("is-active")
  }

  if (e.target === activeFilter) {
    imgListMarkup(arrayImg)
    return
  }

  if (e.target.dataset.tag === "all") {
    (e.target).classList.add("is-active")
    imgListMarkup(arrayImg)
    return
  }

  (e.target).classList.add("is-active")
  const filteredItems = arrayImg.filter(img => img.filterType.includes(e.target.dataset.tag))
  imgListMarkup(filteredItems)
}



filterButtonEl.addEventListener("click", onBtnClick);


