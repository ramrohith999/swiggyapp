import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";




it('should load header component with login with login button', () => {
    render(

        <BrowserRouter>
         <Provider store={appStore}>
            <Header/>
        </Provider>
    
        
        </BrowserRouter>
    );

        const button=screen.getByRole("button");

        expect(button).toBeInTheDocument();

});


it('should change login button to logout', () => {
    render(

        <BrowserRouter>
         <Provider store={appStore}>
            <Header/>
        </Provider>
    
        
        </BrowserRouter>
    );

        const logInbutton=screen.getByRole("button",{name: "Login"});
        fireEvent.click(logInbutton);

        const logOutbutton=screen.getByRole("button",{name: "Logout"});



        expect(logOutbutton).toBeInTheDocument();

});

// it('should load header component with cart items 0', () => {
//     render(

//         <BrowserRouter>
//          <Provider store={appStore}>
//             <Header/>
//         </Provider>
    
        
//         </BrowserRouter>
//     )

//         const cartItem =screen.getByText(/Cart/);

//         expect(cartItem).toBeInTheDocument();

// });

