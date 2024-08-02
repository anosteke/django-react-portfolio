import Jobs from "./Experiences/Jobs";
import Title from "./Title";
import "../styles/home.scss"
import Studies from "./Experiences/Studies";
import Projects from "./Experiences/Projects";

const Home = () => {
  // const [showBugComponent, setShowBugComponent] = useState(false);
  // const [restCheck, setRestCheck] =
  //   useState<Awaited<ReturnType<typeof RestService.restRestCheckRetrieve>>>();

  // useEffect(() => {
  //   async function onFetchRestCheck() {
  //     setRestCheck(await RestService.restRestCheckRetrieve());
  //   }
  //   onFetchRestCheck();
  // }, []);

  return (
    <div className="main-page">
      {/* <h2>Static assets</h2>
      <div id="django-background">
        If you are seeing the green Django logo on a white background and this
        text color is #092e20, frontend static files serving is working:
      </div>
      <div id="django-logo-wrapper">
        <div>
          Below this text, you should see an img tag with the white Django logo
          on a green background:
        </div>
        <img alt="Django Negative Logo" src={DjangoImgSrc} />
      </div>
      <h2>Rest API</h2>
      <p>{restCheck?.message}</p>
      <Button variant="outline-dark" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work
        in Production)
      </Button>
      {/* NOTE: The next line intentionally contains an error for testing frontend errors in Sentry. */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {/* {showBugComponent && (showBugComponent as any).field.notexist} */} 
      <Title/>
      <Jobs/>
      <Studies/>
      <Projects/>
    </div>
  );
};

export default Home;
