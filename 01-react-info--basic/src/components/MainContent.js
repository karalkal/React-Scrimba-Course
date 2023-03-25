export default function MainContent() {
  return (
    <main>
      <h1 id="title">Using the Public Folder</h1>
      <ul>
        <li>The public folder contains the HTML file so you can tweak it, for example, to set the page title. </li>
        <li>You can also add other assets to the public folder.</li>
        <li>Note that we normally encourage you to import assets in JavaScript files instead. For example, see the sections on adding a stylesheet and adding images and fonts.</li>
        <li>If you put a file into the public folder, it will not be processed by webpack. Instead it will be copied into the build folder untouched. To reference assets in the public folder, you need to use an environment variable called PUBLIC_URL.</li>
        <li>Only files inside the public folder will be accessible by %PUBLIC_URL% prefix.</li>
        <li>Normally we recommend importing stylesheets, images, and fonts from JavaScript. The public folder is useful as a workaround for a number of less common cases</li>
      </ul>
    </main>
  )
}