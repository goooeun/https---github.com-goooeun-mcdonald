import GlobalStyle from 'assets/style/GlobalStyle';
import NavigationBar from 'components/navigator/NavigationBar';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/style/theme';
import { Outlet } from 'react-router';

function Root() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <div className="container">
                    <NavigationBar />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default Root;
