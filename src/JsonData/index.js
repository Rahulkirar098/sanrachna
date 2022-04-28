//Utils
import { DashboardColor } from '../Utils'

//Assets / Image
import Newpregnant from '../Assets/Image/Png/Model/newpregnantwomenillustrationcopy01.png'
import yoga from '../Assets/Image/Png/Model/yoga.png'
import readingbook from '../Assets/Image/Png/Model/readingbook.png'
import diet from '../Assets/Image/Png/Model/diet.png'
import idol from '../Assets/Image/Png/Model/idol.png'
import Video from '../Assets/Image/Png/Model/video.png'
import Library from '../Assets/Image/Png/Model/Library.png'
import shloka from '../Assets/Image/Png/Model/shloka.png'
import baby from '../Assets/Image/Png/Model/baby.png'
import yogaImage from '../Assets/Image/static/yoga.jpg'

export const DashboardData = [
    {
        screenName: 'Activity Tracking',
        bgColor: DashboardColor.DashOne,
        model: Newpregnant,
        modelStyle: { width: "40%", height: "90%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 20, top: 50 },
        routeName: 'ActivityTrackerScreen'
    },
    {
        screenName: 'Yoga',
        bgColor: DashboardColor.DashTwo,
        model: yoga,
        modelStyle: { width: "80%", height: "80%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 20, top: 50 },
        routeName: 'YogaScreen'
    },
    {
        screenName: 'Story Book',
        bgColor: DashboardColor.DashThree,
        model: readingbook,
        modelStyle: { width: "70%", height: "125%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 20, top: 50 },
        routeName: 'StoryBookScreen'
    },
    {
        screenName: 'Diet',
        bgColor: DashboardColor.DashFour,
        model: diet,
        modelStyle: { width: "80%", height: "100%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 20, top: 10 },
        routeName: 'DiteScreen'
    },
    {
        screenName: 'Idol Categories',
        bgColor: DashboardColor.DashOne,
        model: idol,
        modelStyle: { width: "60%", height: "100%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 100, position: 'absolute', left: 5, top: 55 },
        routeName: 'IdolCategoriesScreen'
    },
    {
        screenName: 'Video',
        bgColor: DashboardColor.DashTwo,
        model: Video,
        modelStyle: { width: "60%", height: "100%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 10, top: 50 },
        routeName: 'VideoScreen'
    },
    {
        screenName: 'Library',
        bgColor: DashboardColor.DashThree,
        model: Library,
        modelStyle: { width: "80%", height: "100%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 10, top: 50 },
        routeName: 'LibraryScreen'
    },
    {
        screenName: 'Shloka',
        bgColor: DashboardColor.DashFour,
        model: shloka,
        modelStyle: { width: "65%", height: "100%", position: 'absolute', right: 0, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 10, top: 50 },
        routeName: 'ShlokaScreen'
    },
    {
        screenName: "Baby Image's",
        bgColor: DashboardColor.DashOne,
        model: baby,
        modelStyle: { width: "50%", height: "90%", position: 'absolute', right: 20, bottom: 0 },
        textStyle: { color: 'black', fontSize: 18, width: 70, position: 'absolute', left: 80, top: 50 },
        routeName: 'BabyImageScreen'
    },
]

export const MultiScreen = [
    {
        screenName: "title1",
        image: yogaImage
    },
    {
        screenName: "title2",
        image: yogaImage
    },
    {
        screenName: "title3",
        image: yogaImage
    },
    {
        screenName: "title4",
        image: yogaImage
    },
    {
        screenName: "title5",
        image: yogaImage
    },
    {
        screenName: "title6",
        image: yogaImage
    },
    {
        screenName: "title7",
        image: yogaImage
    },
    {
        screenName: "title8",
        image: yogaImage
    },
]