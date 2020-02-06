import { terser } from 'rollup-plugin-terser'; //hämta en viss variabel i paketet med måsvingar
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import browsersync from 'rollup-plugin-browsersync';
import commonjs from '@rollup/plugin-commonjs';
import normalize from 'postcss-normalize';
import filesize from 'rollup-plugin-filesize';
import injectEnv from 'rollup-plugin-inject-env';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';


//Start -- isDevelopement är när man själv utvecklar, för att göra det smidigt för sig själv används browsersync
//det som skrivs efter flaggan i package.json är det som sätts på just den flaggan, skrivs inget på --config körs rollup.config.js by default
//Build -- isProduction är när något ska livesättas, användas av klient, då behövs inte browsersync
const isProduction = process.env.NODE_ENV === "production"; //med process.env.NODE_ENV kan man nå environment, npm run build
const isDevelopment = isProduction === false; //fattar ej --> om isProduction är false blir isDevelopment True

//console.log("is development" , isDevelopment);
//console.log("is production" , isProduction);

export default {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
      ormat: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
    injectEnv(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss ({
      extract: true,
      sourceMap: isDevelopment,
      plugins: [
        normalize(), 
        autoprefixer()
      ]
    }),
      (isDevelopment && browsersync({server: 'public'})), 
      (isProduction && terser()), //terser minifierar (rensar o komprimerar typ) koden
      (isProduction && filesize())
    ]
            //man kan inte köra ifsats i en array så därför kör vi A && B
  
}

