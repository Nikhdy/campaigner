/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}
// for JSON loaders
declare module "*.json" {
  const value: any;
  export default value;
}

