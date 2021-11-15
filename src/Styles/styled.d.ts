import { StyledComponent } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        title: string,
        themeColors: {
        primaryColor: string,
        secondaryColor: string,
        tertiaryColor: string,
        
        whiteColor: string,
        blackColor: string,
        grayColor: string,
        avatarBorderColor: string,
    
        warningColor: string,
        successColor: string,
        errorColor: string,
        infoColor: string
    }
    }
}