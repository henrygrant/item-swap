import { QueryClientProvider, QueryClient } from "react-query";
import { Feed, Groups, Profile, SignIn, SignUp } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "./styles/theme";
import { FontAwesome } from "@expo/vector-icons";
import { pb } from "./pbConfig";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticatedView = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.ALMOSTBLACK,
          borderBottomColor: theme.TINTEDBLACK,
          borderBottomWidth: 2,
        },
        headerTintColor: theme.ALMOSTWHITE,
        tabBarInactiveBackgroundColor: theme.ALMOSTBLACK,
        tabBarActiveBackgroundColor: theme.TINTEDBLACK,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={Feed}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: () => (
            <FontAwesome
              name="shopping-bag"
              size={24}
              color={theme.ALMOSTWHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: () => (
            <FontAwesome name="users" size={24} color={theme.ALMOSTWHITE} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color={theme.ALMOSTWHITE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.ALMOSTBLACK,
              borderBottomColor: theme.TINTEDBLACK,
              borderBottomWidth: 2,
            },
            headerTintColor: theme.ALMOSTWHITE,
          }}
        >
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Sign In" component={SignIn} />
          <Stack.Screen
            name="Main"
            component={AuthenticatedView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
