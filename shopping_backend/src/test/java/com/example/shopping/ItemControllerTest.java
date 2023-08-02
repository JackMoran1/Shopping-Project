package com.example.shopping;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@SpringBootTest
public class ItemControllerTest {

    @Mock
    private ItemService itemService;

    @InjectMocks
    private ItemController itemController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();
    }

    @Test
    public void getAllItemsTest() throws Exception {
        Item item1 = new Item();
        item1.setName("Item 1");
        item1.setQuantity(1);
        item1.setPrice(10.0f);
        item1.setImageURL("blah.jpg");

        Item item2 = new Item();
        item2.setName("Item 2");
        item2.setQuantity(2);
        item2.setPrice(20.0f);
        item2.setImageURL("blah2.jpg");

        List<Item> items = Arrays.asList(item1, item2);

        when(itemService.allItems()).thenReturn(items);

        mockMvc.perform(get("/items")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("[{'name': 'Item 1', 'quantity': 1, 'price': 10.0, 'imageURL': 'http://example.com/item1.jpg'}, {'name': 'Item 2', 'quantity': 2, 'price': 20.0, 'imageURL': 'http://example.com/item2.jpg'}]"));
    }
}

