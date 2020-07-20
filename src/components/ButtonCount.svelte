<script>
    import { count } from '../store/store';

    function handleClick() {
        count.update(n => n + 1);
    }
</script>

<style>
    button {
        background-color: red;
        color: white;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
    }
</style>

<button
    on:click={ handleClick }
>
    Click {$count === 0 ? ''  : $count}
</button>