/* eslint-disable @typescript-eslint/naming-convention */
import "styled-components";

declare module "styled-components" {
  /* Disable Eslint Because Naming Convention Prevents Use "DefaultTheme" And This Name Is Default Of Styled-Components */
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      text: string;
      background: string;
    };
  }
}
