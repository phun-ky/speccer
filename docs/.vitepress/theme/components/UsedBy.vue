<template>
  <div class="ph used-by">
    <div class="ph used-by-items">
      <a
        href="https://www.if-insurance.com"
        target="_blank"
        rel="noreferrer noopener"
        ><img src="/used-by-if.png" alt="If insurance logo"
      /></a>
      <a
        href="https://24sevenoffice.com"
        target="_blank"
        rel="noreferrer noopener"
        ><img src="/used-by-tfso.png" alt="24seven office logo"
      /></a>
    </div>
  </div>
</template>

<style scoped>
.ph.used-by-items {
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  & a {
    text-decoration: none;
    height: 4rem;
    width: 4rem;

    & img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
