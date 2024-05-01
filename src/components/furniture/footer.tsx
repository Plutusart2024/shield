import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/Lissy93/personal-security-checklist/';
  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>Licensed under <a href="/" class="link link-primary">MIT </a> -
      & <a href="/" class="link link-primary">plooty.xyz Cyber Security</a> 2024 - 
      Powered By <a href="/" class="link link-primary">Plooty.XYZ</a></p>
    </aside>
  </footer>
  );
});
