<script>
    import Counter from "$lib/components/counter.svelte";
    import DoubleCounter from "$lib/components/double_counter.svelte";
    let contatore1 = 0;
    let contatore2 = 0;
</script>

<h1>Pagina Counter!!</h1>

<h2>Il valore del contatore 1 vale : {contatore1}</h2>

<h2>Il valore del contatore 2 vale : {contatore2}</h2>

<Counter bind:counter={contatore1}/>
<DoubleCounter bind:double_counter={contatore2}/>



