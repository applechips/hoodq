6 Priority Combinations

{Coffee,Work,Dog}
{Coffee,Dog,Work}
{Work,Coffee,Dog}
{Work,Dog,Coffee}
{Dog,Coffee,Work}
{Dog,Work,Coffee}

1.
2.
3.


<section>
  <div class="container">
    <div class="row">

      <!--  LIST #1 -->
      <div class="col-sm-6">
        <div class="form-group">
          <label for="sel1">Select list:</label>
          <select class="form-control" id="sel1">
            <% @json.each do |i| %>
              <option><%= i["address"] %></option>
            <% end %>
          </select>
        </div> <!-- form-group -->
      </div> <!-- col -->

      <!--  LIST #2 -->
      <div class="col-sm-6">
        <div class="form-group">
          <label for="sel1">Select list:</label>
          <select class="form-control" id="sel2">
            <% @json.each do |i| %>
              <option><%= i["address"] %></option>
            <% end %>
          </select>
        </div> <!-- form-group -->
      </div> <!-- col -->

    </div> <!-- row -->
  </div>

</section>
