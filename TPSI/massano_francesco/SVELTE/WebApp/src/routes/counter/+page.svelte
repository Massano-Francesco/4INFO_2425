<script>
    import Counter from "$lib/components/counter.svelte";
    import DoubleCounter from "$lib/components/double_counter.svelte";
    let contatore1 = 0;
    let contatore2 = 0;
    let numeri = [1,7,2,6,9,10];
    let sottolineato = true;
    let doppio;
    
    $: doppio = contatore1 * 2;
    $: sottolineato = contatore1 % 2 === 0;

    function gestisci_evento(evento) {
        alert(`${evento.detail.tipo} -- ${evento.detail.valore}`);
    }

</script>

<h1>Pagina Counter!!</h1>

<h2 class:sottolineato>
    il valore del contatore vale: {contatore1}
</h2>

<h2>
    il suo doppio vale {doppio}
</h2>


{#if contatore1 < 5}
    
    <h2 class="rosso">Il valore del contatore 1 vale : {contatore1}</h2>

{:else}
<h2 class="verde">Il valore del contatore 1 vale : {contatore1}</h2>
{/if}

{#if contatore2 < 10}
    
    <h2 class="rosso">Il valore del contatore 2 vale : {contatore2}</h2>

{:else}
<h2 class="verde">Il valore del contatore 2 vale : {contatore2}</h2>
{/if}


<Counter bind:counter={contatore1} on:contatore={gestisci_evento}/>
<DoubleCounter bind:double_counter={contatore2}/>

<ul>
    {#each numeri as numero,indice}
        <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<style>
    .rosso {color: red; text-decoration: underline;}
    .verde {color: green; text-decoration: underline;}
    .sottolineato {text-decoration: underline;}
</style>



