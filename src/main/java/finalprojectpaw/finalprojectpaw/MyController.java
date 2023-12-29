/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package finalprojectpaw.finalprojectpaw;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MyController {

    MenuJpaController ctrl = new MenuJpaController();
    @RequestMapping("/read")
    public String getData() {
        Menu buffer = new Menu();
        buffer.setNamamenu(ctrl.findMenu(3333).getNamamenu());
        return buffer.getNamamenu();
    }

    //read all data
    @RequestMapping("/readAll")
    public List<Menu> getAll() {
        List<Menu> allData;
        allData = ctrl.findMenuEntities();
        return allData;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String createData(@RequestBody Menu newClient) {
        try {
            ctrl.create(newClient);
            return "Create Data Berhasil";
        } catch (Exception e) {
            return "Failed to create data" + e.getMessage();
        }
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public String deleteData(@PathVariable("id") int id) {
        try {
            ctrl.destroy(id);
            return "Delete Data Berhasil";
        } catch (Exception e) {
            return "Failed to delete data" + e.getMessage();
        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public String updateData(@PathVariable("id") int id, @RequestBody Menu updatedMenu) {
        try {
            // Menemukan orang dengan ID yang diberikan
            Menu existingMenu = ctrl.findMenu(id);

            // Memeriksa apakah orang ditemukan
            if (existingMenu != null) {
                // Memperbarui data orang dengan data yang diberikan
                existingMenu.setNamamenu(updatedMenu.getNamamenu());
                existingMenu.setHarga(updatedMenu.getHarga());
                // Tambahkan pembaruan lainnya sesuai kebutuhan

                // Simpan perubahan ke dalam database
                ctrl.edit(existingMenu);

                return "Update Data Berhasil";
            } else {
                return "Data not found with ID: " + id;
            }
        } catch (Exception e) {
            return "Failed to update data: " + e.getMessage();
        }
    }

}
