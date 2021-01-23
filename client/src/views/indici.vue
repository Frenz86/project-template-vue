<style scoped>
  label {
    margin: 5px 0px 5px 0px;
  }
</style>
<template>
  <div>
    <b-container class="mb-3 justify-content-center" style="max-width: 800px;">
      <h5 style="margin: 0px;">

      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Riassunto" active>
            <p>Tabella riassunto
   
            </p></b-tab>
          <b-tab title="Bilancio">
            <p>Tabella bilancio</p></b-tab>
            <div>
              <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="#">NavBar</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                  </b-navbar-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                      <!-- Using 'button-content' slot -->
                      <template #button-content>
                        <em>User</em>
                      </template>
                      <b-dropdown-item href="#">Profile</b-dropdown-item>
                      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>         
          <b-tab title="Indici"><p>Tabella Indici</p></b-tab>
          <b-tab title="Medie"><p>Tabella medie</p></b-tab>
          <b-tab title="Multipli e parametri"><p>Tabella Multipli e parametri</p></b-tab>
          <b-tab title="Valuation"><p>Formule Valuation</p></b-tab>

        </b-tabs>
      </div>
      
      </h5>
    </b-container>
  </div>
</template>
<script>

</script>
