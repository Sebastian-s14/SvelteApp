<script>
    let someText = 'Frontend Developer FullStack';
    let count = 0;
    let styles = { darkMode: false }

    function handleCount() {
        count += 1
    }

    function toggle() {
        styles.darkMode = !styles.darkMode
        window.document.body.classList.toggle("dark-mode")
    }
</script>

<style>
    p {
        color: var(--theme-color);
        font-size: 22px;
    }
</style>

<div class="About">

    { #if !styles.darkMode }
        <p>
            { someText }
        </p>
    { :else }
        <p>
            <span>Hello DarkMode</span>
        </p>
    { /if }

    <button on:click={ handleCount }>
        Click { count === 0 ? '' : count }
    </button>
    <button on:click={ toggle }>
        DarkMode
    </button>
</div>