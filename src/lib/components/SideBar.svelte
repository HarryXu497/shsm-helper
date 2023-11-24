<script lang="ts">
</script>

<nav class="sidebar">
  <div class="img">
    <img src="shsmlogo.png" alt="SHSM Logo" />
  </div>
  <ul class="links">
    <li>
      <div class="box">
        <img class="icons" src="Home_light.png" width="30px" height="30px" />
        <a href="/">Home</a>
      </div>
    </li>
    <li>
      <div class="box">
        <img
          class="icons"
          src="Setting_line_light.png"
          width="30px"
          height="30px"
        />
        <a href="/student/events">Events</a>
      </div>
    </li>
    <li>
      <div class="box">
        <img
          class="icons"
          src="Done_ring_round_light.png"
          width="30px"
          height="30px"
        />
        <a href="/student/progress">Progress</a>
      </div>
    </li>
  </ul>
</nav>

<style lang="scss">
  .sidebar {
    background-color: var(--color-primary);
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: clamp(16rem, 20vw, 20rem);
    padding: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }

  .icons {
    margin-top: 0px;
    margin-bottom: 5px;
    margin-right: 5px;
    margin-left: 5px;
  }

  .box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10%;
    border-radius: 20px;
    background-color: rgb(226, 196, 253);
    text-align: center;
    padding-left: 10px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .sidebar a {
    all: unset;
    color: #ca56ff;
  }

  .img,
  .img img {
    width: 100%;
  }

  .img {
    overflow: hidden;
    aspect-ratio: 1 / 1;

    width: 60%;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    font-size: 1.25rem;
  }
</style>
