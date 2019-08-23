<!-- =========================================================================================
    File Name: TableExpandableData.vue
    Description: Create expandable rows which have custom data
    ----------------------------------------------------------------------------------------
    Item Name: The Key Society
      Author: Marwan Refaat
    Author URL: https://TheKeySociety.com
========================================================================================== -->


<template>
    <vx-card title="" code-toggler>

        <!-- <p>You can add the functionality of expanding a <strong>tr</strong> to visualize more data to make a structure of data or more complex functionalities</p><br> -->

        <vs-table :data="users">

            <template slot="thead">
                <vs-th>Email</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Website</vs-th>
                <vs-th>Nro</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.email">
                        {{tr.email}}
                    </vs-td>
                    <vs-td :data="tr.username">
                        {{tr.name}}
                    </vs-td>
                    <vs-td :data="tr.website">
                        {{tr.website}}
                    </vs-td>
                    <vs-td :data="tr.id">
                        {{tr.id}}
                    </vs-td>

                    <template class="expand-user" slot="expand">
                        <div class="con-expand-users w-full">
                            <div class="con-">
                                <div class="con-userx flex items-center justify-start">
                                    
                                    
                                </div>
                            </div>
                            
                            <vs-row>
  <vs-col  v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
    <vs-avatar :badge="tr.id" size="85px" :src="`https://randomuser.me/api/portraits/women/${tr.id}.jpg`" /><br>
    <span class="text-center">{{ tr.name }}</span>
  </vs-col>
  <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
    <vs-list><h3>User Information</h3><br>
                                <vs-list-item icon-pack="feather" icon="icon-mail" :title="tr.email"></vs-list-item>
                                <vs-list-item icon-pack="feather" icon="icon-globe" :title="tr.website"></vs-list-item>
                            </vs-list>
  </vs-col>
  <vs-col  v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
      100% match for<br>
      Senior Product Manager, New York, NY.<br>
   <vs-button color="danger" type="gradient" icon-pack="feather" >View Profile</vs-button>
  </vs-col>
</vs-row>
                            
                            
                            
                        </div>
                    </template>
                    
                </vs-tr>
            </template>
        </vs-table>


    </vx-card>
</template>
<style>
.text-center {
    text-align: center !important;
    font-size: 23px;
    font-weight: 500;
}
.vs-col.vs-xs-.vs-sm-.vs-lg- {
    display: block !important;
        text-align: center !important;
}
h3{
    color:red;
}
button.vs-component.vs-button.vs-button-danger.vs-button-gradient {
    margin-top: 25px;
}
.con-img.vs-avatar--con-img {
    border: 4px solid red;
}
</style>

<script>
export default {
    data() {
        return {
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                },
            ]
        }
    },
}
</script>
