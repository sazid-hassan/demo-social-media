import MainLayout from "@/components/layouts/MainLayout";
import store from "@/redux-store/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
