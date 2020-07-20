<script>
    let someText = 'Frontend Developer FullStack';
    let count = 0;
    function handleCount() {
        count += 1
    }
</script>

<style>
    p {
        color: var(--theme-color);
        font-size: 22px;
    }
</style>

<div class="About">
    <p>
        { someText }
    </p>
    <button on:click={ handleCount }>
        Click { count === 0 ? '' : count }
    </button>
</div>