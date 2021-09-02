import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    title: "Roulette",
    info: "A simple landing page where user gets 3 spins to spin for a chance at winning jackpot prize",
    tech: ["html5", "css3-alt", "React JS"],
    src: "./images/spin/pic1.png",
    site: "https://github.com/Hatdoggy/casino/",
    class: "img-shdw h-per decNuc",
    view: [
      "./images/spin/pic1.png",
      "./images/spin/pic2.png",
      "./images/spin/pic3.png",
      "./images/spin/pic4.png",
    ],
    id: "decNuc",
    code: "https://github.com/Hatdoggy/casino",
    ndx: 0,
  },
  {
    title: "Mr.Recipe",
    info: "A web application made because of the love for cooking, used MealDB api to display different types of recipes. ",
    tech: ["html5", "css3-alt", "js"],
    src: "./images/rec/rec-1.JPG",
    site: "https://hatdoggy.github.io/MrRecipe/",
    class: "img-shdw mr-2 ml-2 h-per rec",
    view: [
      "./images/rec/rec-1.JPG",
      "./images/rec/rec-2.jpg",
      "./images/rec/rec-3.JPG",
      "./images/rec/rec-4.JPG",
      "./images/rec/rec-5.jpg",
      "./images/rec/rec-6.JPG",
    ],
    id: "rec",
    code: "https://github.com/Hatdoggy/MrRecipe",
    ndx: 1,
  },
  {
    title: "Slot Machine",
    info: "A simple pre landing page site with slot machine that gives user 3 tries to win a prize",
    tech: ["html5", "css3-alt", "js", "react"],
    src: "./images/spinner/pic1.png",
    site: "https://github.com/Hatdoggy/slot-machine",
    class: "img-shdw ml-2 h-per kp",
    view: [
      "./images/spinner/pic1.png",
      "./images/spinner/pic2.png",
      "./images/spinner/pic3.png",
      "./images/spinner/pic4.png",
    ],
    id: "kp",
    code: "https://github.com/Hatdoggy/slot-machine",
    ndx: 2,
  },
  {
    title: "Activities API",
    info: "A node express API about the different activities you can do and experience in the Philippines",
    tech: ["html5", "css3-alt", "js", "node-js"],
    src: "./images/api/docs.jpg",
    site: "https://hatdoggy.github.io/Deceased-Nucleus/",
    class: "img-shdw h-per api",
    view: [
      "./images/api/docs.jpg",
      "./images/api/act.jpg",
      "./images/api/pic.jpg",
      "./images/api/calls.jpg",
    ],
    id: "api",
    code: "https://activitiesapi.herokuapp.com/",
    ndx: 3,
  },
];

export default data;

const Web = (props) => {
  return (
    <div
      className={`pos-abs w-auto h-80 flex jc-flex al-flex bg-dark front br-15 fade-1 popShdw p-20 webPop`}
    >
      <div
        className={`flex jc-flex al-flex h-per hide-bar pos-rel webSub ${
          props.mobile && "w-100"
        }`}
      >
        <FontAwesomeIcon
          className="clr-dark pos-abs exit-1"
          icon="times-circle"
          onClick={props.reset}
        />
        <img
          src={props.webDesc.src}
          alt={props.webDesc.title}
          className="w-50 img-shdw dispImg"
          id={props.webDesc.id}
        />
        <div
          className={`flex flx-col al-flex jc-flex hide-x thmb p-20 thin popShdw w-50 ml-5`}
        >
          <div
            className={`flex h-cus over-hide flow-x-scr thmb w-100 ${
              props.mobile && "mt-5"
            }`}
          >
            {data[props.webDesc.ndx].view.map((src, ndx) => (
              <div
                className="fit ml-2 hov w-50 scr-el"
                key={ndx}
                onClick={props.disp}
              >
                <img
                  src={src}
                  alt={ndx}
                  className="img-shdw ml-2 h-per cursor"
                  name={props.webDesc.id}
                  onClick={props.disp}
                />
              </div>
            ))}
          </div>

          <p className="lato-r mt-2 al-ce">{props.webDesc.info}</p>
          <p
            className="lato bold mt-2 title cursor drk-glass popShdw shadow p-20 w-50 al-ce hov"
            onClick={() => props.transfer(props.webDesc.code)}
          >
            {props.webDesc.title}
            <FontAwesomeIcon className="ml-2" icon={["fab", "github"]} />
          </p>
        </div>
      </div>
    </div>
  );
};

const WebMob = (props) => {
  return (
    <div>
      {data.map((cur, ndx) => (
        <div
          className={`web-des flex ${
            ndx != 0 ? "mt-15" : "mt-5"
          } flx-rev over-hide jc-flex al-flex`}
          key={ndx}
        >
          {props.land ? (
            <div className="w-100 flex flx-col">
              <img
                src={cur.src}
                alt={cur.title}
                className="web-img w-100 img-shdw"
                id={cur.id}
              />
              <div className="flex ml-2 h-cus mt-2 over-hide flow-x-scr thmb w-80">
                {cur.view.map((src, ndx) => (
                  <div className="fit ml-2" key={ndx}>
                    <img
                      src={src}
                      alt={ndx}
                      className="img-shdw ml-5 w-small h-per cursor"
                      name={cur.id}
                      onClick={props.disp}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <img
              src={cur.src}
              alt={cur.title}
              className="web-img img-shdw"
              id={cur.id}
            />
          )}

          <div className="mt-5 flex flx-col mr-0 w-100">
            {!props.land && (
              <div className="flex mt-5 h-cus over-hide flow-x-scr thmb w-100">
                {cur.view.map((src, ndx) => (
                  <div className="fit ml-2 hov" key={ndx}>
                    <img
                      src={src}
                      alt={ndx}
                      className="img-shdw ml-2 h-per cursor"
                      name={cur.id}
                      onClick={props.disp}
                    />
                  </div>
                ))}
              </div>
            )}

            <h4
              className="mont bold mt-5 txt-r title cursor"
              onClick={() => props.transfer(cur.code)}
            >
              {cur.title}
            </h4>
            <p className="lato-r mt-2 txt-r cur-info w-100">{cur.info}</p>
            <div className="mt-5 flex al-flex jc-flex">
              {cur.tech.map((tech, index) => (
                <FontAwesomeIcon
                  icon={["fab", tech]}
                  id={tech}
                  key={index}
                  className={`${(index === 2 || 3) && "ml-10 mr-10"} tech`}
                />
              ))}
            </div>
            <p
              onClick={() => props.redirect(cur.site)}
              className="view cursor p-10 btn-grd al-ce mt-2 br-15 w-50 trans-1 lato bold"
            >
              View Project
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { WebMob, Web };
