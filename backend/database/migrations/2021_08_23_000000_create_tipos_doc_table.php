<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTiposdocTable extends Migration
{
    public function up()
    {
        Schema::create('tipos_doc', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("nombre")->nullable();
            $table->string

("category_id")->nullable();
            $table->string

("color")->nullable();
            $table->string

("patron")->nullable();
            $table->enum
("estado", ["Activo","Inactivo"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipos_doc');
    }
}

