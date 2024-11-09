<div class="container">
    <div class="row">
      <div class="col-sm-6">
          <b>Childs First Name:</b>{{row.Childs_First_Name}}
      </div>
      <div class="col-sm-6">
        <b>DOB:</b>{{moment(row.DOB).format("MM-DD-YYYY") }}
      </div>
      
    </div>
  
    <br />
    <br />
  
    <div class="row">
      <div class="col-sm-6">
          <b>Gender:</b>{{ row.Gender}}
      </div>
      <div class="col-sm-6">
        <b>Ethnicity:</b>{{ row.Ethnicity}}
      </div>
      
    </div>

    <br />
    <br />

  
    <div class="row">
  <div class="col-sm-12">
      <b>Items:</b>
      {{ Object.keys(row.Items)
          .filter(key => row.Items[key] === true)
          .map(key => key.replace(/_/g, ' '))
          .join(', ') }}
  </div>
</div>
<br />
<br />

<div class="row">
  <div class="col-sm-12">
      <b>Diaper Sizes Needed:</b>
      {{ Object.keys(row.Diaper_Sizes_needed)
          .filter(key => row.Diaper_Sizes_needed[key] === true)
          .map(key => key.replace(/_/g, ' '))
          .join(', ') }}
  </div>
</div>
<br />
<br />

<div class="row">
  <div class="col-sm-12">
      <b>Bedding Needed:</b>
      {{ Object.keys(row.Bedding_needed)
          .filter(key => row.Bedding_needed[key] === true)
          .map(key => key.replace(/_/g, ' '))
          .join(', ') }}
  </div>
</div>
<br />
<br />




    
    
    
   
    
    
    
    <div class="row">
      <div class="col-sm-6">
          <b>Additional Notes:</b>{{ row.Additional_Notes }}
      </div>
      <div class="col-sm-6">
        <b>Care Seat Size:</b>{{ row.Care_Seat_Size }}
      </div>
      
    </div>
  
    <br />
    <br />
    
    <div class="row">
      <div class="col-sm-6">
          <b>Child Weight (Weighted Blanket):</b>{{row.Child_Weight_Weighted_Blanket }}
        </div>
      <div class="col-sm-6">
            <b>Other needs:</b>{{ row.Other_needs }}
      </div>
      
    </div>
    <br />
    <br />
  
    <div class="row">
      
        
      
        <div class="col-sm-6">
          </div>
          
          
          
      {% if (!instance.options.readOnly && !instance.originalComponent.disabled) {
      %}
      <div class="col-sm-4">
        <div class="btn-group pull-right">
          <button class="btn btn-default btn-light btn-sm editRow">
            <i class="{{ iconClass('edit') }}"></i>
          </button>
          {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}
          <button class="btn btn-danger btn-sm removeRow">
            <i class="{{ iconClass('trash') }}"></i>
          </button>
          {% } %}
        </div>
      </div>
      {% } %}
    </div>
  </div>
  
  