<template>
  <div class="row bg-theme p-2">
    <!-- Use col-sm-12 for small screens and col-md-6 for medium and larger screens -->
    <div class="col-sm-12 col-md-6">
      <FormBasicInformationForm />
    </div>
    <div class="col-sm-12 col-md-6">
      <FormBasicInformationForm />
    </div>
    <div class="col-12">
      <FormUnitType />
    </div>
  </div>
</template>

<script setup lang="ts">
import Form from "~/components/Form.vue"
import type { Unit } from "~/public/units_data"

// Define the props and ensure units is an array
const props = defineProps({
  units: {
    type: Array as PropType<Unit[]>, // Ensure it's an array of Unit
    required: true,
  },
})
</script>

<!--      
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">I am bootstrap modal using JS!</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
 
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
        -->
