<script lang="ts">

    let {data} = $props();


</script>


<div class="min-h-screen flex flex-col justify-center items-center">
    <div class="mt-5">
        <h2 class="text-3xl "> Todo List</h2>
    </div>

    <div class="mt-5">


    <form  method="POST" action="?/SendTodo">
        <div class="grid flex-col">


            <label> Content</label>
            <input class=" bg-round border border-solid "type="text" name="contents"/> 
           </div>

           <button type="submit" class=" mt-5 py-2 px-2 rounded bg-blue-500 text-white">Send </button>

    </form>
    </div>

    

<div class="relative overflow-x-auto mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Id
                </th>
                <th scope="col" class="px-6 py-3">
                Created Date
                </th>
                <th scope="col" class="px-6 py-3">
                Contents
                </th>
                <th scope="col" class="px-6 py-3">
                Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {#each data.ToDoData  ?? [] as TodoList}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {TodoList.ID}
                </th>
                <td class="px-6 py-4">
                    {TodoList.CREATED_AT}
                </td>
                <td class="px-6 py-4">
                       {TodoList.CONTENTS}
                </td>
                <td class="px-6 py-4">
                  <form method="POST" action="?/DeleteToDo">
                        <input type="hidden" value={TodoList.ID}/>
                        <button class="py-2 px-2 bg-red-500 text-white lg:rounded"> Delete</button>
                  </form>
                </td>
            </tr>
           {/each}
        </tbody>
    </table>
</div>

     
  


</div>