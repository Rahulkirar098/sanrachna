//Import Screen
import {
    SplashScreen,
    IntroScreen,
    LoginScreen,
    BabyStepScreen,
    CurrentStageScreen,
    SignupScreen,
    ProfileEditScreen,
    Dashboard,
    DoctorChat,
    MainChat,
    ActivityTrackerScreen,
    YogaScreen,
    StoryBookScreen,
    DiteScreen,
    IdolCategoriesScreen,
    VideoScreen,
    LibraryScreen,
    ShlokaScreen,
    BabyImageScreen,
    Today,
    KnowMoreBabyScreen
} from '../Component/Screens'

export const stackNavigation = [
    {
        name: 'SplashScreen',
        component: SplashScreen
    },
    {
        name: 'IntroScreen',
        component: IntroScreen
    },
    {
        name: 'LoginScreen',
        component: LoginScreen
    },
    {
        name: 'SignupScreen',
        component: SignupScreen
    },
    {
        name: 'BabyStepScreen',
        component: BabyStepScreen
    },
    {
        name: 'CurrentStageScreen',
        component: CurrentStageScreen
    },
    {
        name: 'MainChat',
        component: MainChat
    },
    {
        name: 'DoctorChat',
        component: DoctorChat,
    },
    {
        name: 'ProfileEditScreen',
        component: ProfileEditScreen
    },
]

export const StackBottomRoute = [
    {
        name: 'Dashboard',
        component: Dashboard
    },
    {
        name: 'ActivityTrackerScreen',
        component: ActivityTrackerScreen
    },
    {
        name: 'YogaScreen',
        component: YogaScreen
    },
    {
        name: 'StoryBookScreen',
        component: StoryBookScreen
    },
    {
        name: 'DiteScreen',
        component: DiteScreen
    },
    {
        name: 'IdolCategoriesScreen',
        component: IdolCategoriesScreen
    },
    {
        name: 'VideoScreen',
        component: VideoScreen
    },
    {
        name: 'LibraryScreen',
        component: LibraryScreen
    },
    {
        name: 'ShlokaScreen',
        component: ShlokaScreen
    },
    {
        name: 'BabyImageScreen',
        component: BabyImageScreen
    },
]

export const TodayNavigation = [
    {
        name: 'Today',
        component: Today
    },
    {
        name: 'KnowMoreBabyScreen',
        component: KnowMoreBabyScreen
    },
]